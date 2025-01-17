import React, { useState, useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaCheckCircle, FaCircle } from 'react-icons/fa';
import MiniChart from '../../assets/minichart.png'

// Register Chart.js components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const ProgressRadarChart = () => {
  const [subjects, setSubjects] = useState([]);
  const [progress, setProgress] = useState({});
  const [selectedSubject, setSelectedSubject] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [todoViewIndex, setTodoViewIndex] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Load initial data
  useEffect(() => {
    try {
      const savedSubjects = JSON.parse(localStorage.getItem('selectedSubjects')) || [];
      const savedTodos = JSON.parse(localStorage.getItem('todoList'));
      const savedProgress = JSON.parse(localStorage.getItem('subjectProgress')) || {};

      setSubjects(savedSubjects);
      setTodoList(Array.isArray(savedTodos) ? savedTodos : []);
      setProgress(savedProgress);

      // Set initial progress for new subjects
      const initialProgress = { ...savedProgress };
      savedSubjects.forEach(subject => {
        if (!(subject in initialProgress)) {
          initialProgress[subject] = 0;
        }
      });
      setProgress(initialProgress);
    } catch (error) {
      console.error('Error loading data:', error);
      setSubjects([]);
      setTodoList([]);
      setProgress({});
    }
  }, []);

  const chartData = {
    labels: subjects,
    datasets: [
      {
        label: 'Progress (%)',
        data: subjects.map(subject => progress[subject] || 0),
        backgroundColor: 'rgba(255, 99, 90, 1)',
        borderColor: 'rgba(255, 99, 90, 1)',
        borderWidth: 3,
      },
    ],
  };

  const chartOptions = {
    scales: {
      r: {
        beginAtZero: true,
        min: 0,
        max: 100,
        pointLabels: {
          color: (context) => {
            const labelColors = ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'];
            return labelColors[context.index % labelColors.length];
          },
          font: {
            size: 14,
          },
        },
        ticks: {
          stepSize: 20,
        },
        grid: {
          lineWidth: 20,
          color: 'rgba(255, 255, 255, 1)',
        },
      }
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white',
        },
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `Progress: ${context.raw}%`;
          }
        }
      }
    }
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    const title = e.target.todoTitle.value;
    const description = e.target.todoDesc.value;
    const keywords = e.target.todoKeywords.value;

    if (!title || !description || !keywords) {
      alert('Semua field harus diisi!');
      return;
    }

    const newTodo = {
      id: Date.now(),
      title,
      description,
      keywords,
      subject: selectedSubject,
      completed: false,
      date: new Date().toLocaleDateString(),
      isExpanded: false, // Menambahkan properti isExpanded
    };

    const updatedTodos = [...todoList, newTodo];
    setTodoList(updatedTodos);
    localStorage.setItem('todoList', JSON.stringify(updatedTodos));
    
    // Reset form
    e.target.reset();
    updateProgress(selectedSubject);
  };

  const toggleTodoComplete = (todoId) => {
    const updatedTodos = todoList.map(todo => {
      if (todo.id === todoId) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodoList(updatedTodos);
    localStorage.setItem('todoList', JSON.stringify(updatedTodos));
    updateProgress(selectedSubject);
  };

  const updateProgress = (subject) => {
    const subjectTodos = todoList.filter(todo => todo.subject === subject);
    const completedTodos = subjectTodos.filter(todo => todo.completed);
    const progressValue = subjectTodos.length ? 
      Math.round((completedTodos.length / subjectTodos.length) * 100) : 0;

    const newProgress = { ...progress, [subject]: progressValue };
    setProgress(newProgress);
    localStorage.setItem('subjectProgress', JSON.stringify(newProgress));
  };

  const handleDeleteTodo = (todoId) => {
    if (!window.confirm('Yakin ingin menghapus todo ini?')) return;

    const updatedTodos = todoList.filter(todo => todo.id !== todoId);
    setTodoList(updatedTodos);
    localStorage.setItem('todoList', JSON.stringify(updatedTodos));
    updateProgress(selectedSubject);
  };

  const toggleDescription = (todoId) => {
    const updatedTodos = todoList.map(todo => {
      if (todo.id === todoId) {
        return { ...todo, isExpanded: !todo.isExpanded };
      }
      return todo;
    });
    setTodoList(updatedTodos);
    localStorage.setItem('todoList', JSON.stringify(updatedTodos));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Chart Section */}
        <div className="lg:w-1/2">
          <div className="bg-gradient-to-b from-gray-600 to-gray-700 rounded-lg p-4 shadow-lg">
            <h2 className="montserrat text-base md:text-2xl text-white font-bold mb-10">Progress Pembelajaran</h2>
            <div className='relative h-[260px] md:h-[400px] -left-[5px] md:left-[80px]'>
              <Radar data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>

        {/* Todo Section */}
        <div className="lg:w-1/2">
          <div className="bg-gradient-to-b from-gray-600 to-gray-700 rounded-lg p-4 shadow-lg">
            <div className="flex flex-col md:flex-row justify-between items-center gap-y-5 md:mb-6">
              <h2 className="text-base md:text-2xl text-white font-bold">Todo List</h2>
              <div className="relative">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="bg-gradient-to-b from-[#FF635A] to-[#952A25] text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-md mb-5"
                >
                  <RxHamburgerMenu />
                  {selectedSubject || 'Pilih Mata Pelajaran'}
                </button>
                
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
                    {subjects.map((subject) => (
                      <button
                        key={subject}
                        onClick={() => {
                          setSelectedSubject(subject);
                          setIsMenuOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        {subject}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {selectedSubject && (
              <form onSubmit={handleAddTodo} className="mb-6">
                <div className="space-y-4">
                  <input
                    type="text"
                    name="todoTitle"
                    placeholder="Judul Todo"
                    className="bg-gray-700 w-full montserrat text-white md:text-lg p-2 rounded-lg outline-none placeholder:font-semibold shadow-sm"
                  />
                  <textarea
                    name="todoDesc"
                    placeholder="Deskripsi Todo"
                    className="bg-gray-700 w-full montserrat text-white md:text-lg p-2 rounded-lg h-24 resize-none outline-none placeholder:font-semibold shadow-sm"
                  />
                  <input
                    type="text"
                    name="todoKeywords"
                    placeholder="Kata Kunci Materi"
                    className="bg-gray-700 w-full montserrat text-white md:text-lg p-2 rounded-lg outline-none placeholder:font-semibold shadow-sm"
                  />
                  <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
                  >
                    Tambah Todo
                  </button>
                </div>
              </form>
            )}

            <div className="md:px-2 space-y-4 overflow-y-auto max-h-[155px]">
              {Array.isArray(todoList) && todoList
                .filter(todo => todo.subject === selectedSubject)
                .map((todo) => (
                  <div
                    key={todo.id}
                    className="bg-white md:px-5 border rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-row items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => toggleTodoComplete(todo.id)}
                          className="md:text-xl"
                        >
                          {todo.completed ? (
                            <FaCheckCircle className="text-green-500" />
                          ) : (
                            <FaCircle className="text-gray-300" />
                          )}
                        </button>
                        <h3 className={`font-semibold md:text-xl ${todo.completed ? 'line-through text-gray-600' : ''}`}>
                          {todo.title}
                        </h3>
                      </div>

                      <button
                        onClick={() => handleDeleteTodo(todo.id)}
                        className="font-semibold text-red-500 hover:text-red-700"
                      >
                        Hapus
                      </button>
                    </div>

                    {/* DESCRIPTION */}
                    <div className="mt-2 pl-8">
                      <p className="text-gray-900"
                      style={{ maxWidth: '100%', overflowWrap: 'break-word' }}>
                        {todo.isExpanded ? todo.description : `${todo.description.substring(0, 100)}...`}
                      </p>
                      <button
                        onClick={() => toggleDescription(todo.id)}
                        className="text-blue-500 text-sm mt-2"
                      >
                        {todo.isExpanded ? 'Tutup' : 'Lihat'}
                      </button>
                      <p className="text-sm text-gray-500 mt-1">
                        Kata Kunci: {todo.keywords}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressRadarChart;
