# React To-Do List Application

A modern, responsive, and fully-featured To-Do List application built with React. Perfect for managing daily tasks with a clean and intuitive user interface.

## ✨ Features

- ✅ **Add Tasks** - Quickly add new tasks with input validation
- ✅ **Delete Tasks** - Remove tasks you no longer need
- ✅ **Mark as Complete** - Toggle task completion status with visual feedback
- ✅ **Filter Tasks** - View All, Active, or Completed tasks
- ✅ **LocalStorage Persistence** - Data persists even after page refresh
- ✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- ✅ **Modern UI** - Beautiful gradient design with smooth animations
- ✅ **Statistics** - Real-time count of total, active, and completed tasks
- ✅ **Accessibility** - Proper ARIA labels and semantic HTML

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sagar-vinitha/To-Do.git
cd To-Do
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open automatically at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── App.jsx                 # Main component with state management
├── App.css                 # App styles and responsive design
├── index.jsx              # Entry point
├── index.css              # Global styles
└── components/
    ├── TodoForm.jsx       # Input form for adding tasks
    ├── TodoList.jsx       # Container for all tasks
    ├── TodoItem.jsx       # Individual task component
    └── FilterButtons.jsx  # Filter controls
public/
└── index.html             # HTML template
```

## 🎯 Usage

1. **Add a Task**: Type in the input field and click the "Add" button or press Enter
2. **Complete a Task**: Click the checkbox next to a task to mark it complete
3. **Delete a Task**: Click the trash icon to remove a task
4. **Filter Tasks**: Use the filter buttons to view:
   - **All**: All tasks
   - **Active**: Only incomplete tasks
   - **Completed**: Only completed tasks

## 💾 LocalStorage

All tasks are automatically saved to your browser's localStorage. When you refresh the page or close and reopen the browser, your tasks will still be there!

## 🎨 Design Features

- **Modern Gradient Background**: Purple gradient theme
- **Card-based Layout**: Centered, responsive card design
- **Smooth Animations**: Fade-in effects and hover transitions
- **Dark Mode Ready**: Easy to adapt for dark theme
- **Mobile Optimized**: Works great on all screen sizes

## 🔧 Technologies Used

- **React 18.2** - UI Library
- **Hooks** - useState, useEffect for state management
- **CSS3** - Modern styling with flexbox and grid
- **LocalStorage API** - Data persistence

## 📱 Responsive Breakpoints

- **Desktop**: Full layout (600px+)
- **Tablet**: Adjusted spacing (600px and below)
- **Mobile**: Single column layout (400px and below)

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels on buttons
- Keyboard navigation support
- Focus states for all interactive elements
- Proper color contrast

## 🐛 Troubleshooting

### Tasks not saving?
- Check if localStorage is enabled in your browser
- Clear browser cache and try again

### Styling not loading?
- Make sure all CSS files are in the correct location
- Try clearing the browser cache

### Port already in use?
```bash
npm start -- --port 3001
```

## 📝 Future Enhancements

- Drag and drop to reorder tasks
- Edit existing tasks
- Task categories/labels
- Due dates and reminders
- Dark mode toggle
- Export/import tasks
- Cloud sync with backend

## 👨‍💻 Author

Created by Sagar Vinitha

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to fork this project and submit pull requests.

---

**Happy Task Managing! 📝✨**
