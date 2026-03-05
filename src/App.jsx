import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import SummaryCards from "./components/SummaryCards";
import TicketList from "./components/TicketList";
import TaskStatus from "./components/TaskStatus";
import Footer from "./components/Footer";
import tickets from "./data/tickets";

function App() {
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  const handleAddToTaskStatus = (ticket) => {
    // Don't add duplicates
    if (
      inProgressTasks.find((t) => t.id === ticket.id) ||
      resolvedTasks.find((t) => t.id === ticket.id)
    ) {
      toast.warn(`Ticket ${ticket.id} is already in Task Status!`, {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }
    setInProgressTasks((prev) => [...prev, ticket]);
    toast.info(`"${ticket.title}" added to Task Status!`, {
      position: "top-right",
      autoClose: 2500,
    });
  };

  const handleResolve = (ticketId) => {
    const ticket = inProgressTasks.find((t) => t.id === ticketId);
    if (ticket) {
      setInProgressTasks((prev) => prev.filter((t) => t.id !== ticketId));
      setResolvedTasks((prev) => [...prev, ticket]);
      toast.success(`"${ticket.title}" has been resolved!`, {
        position: "top-right",
        autoClose: 2500,
      });
    }
  };

  const handleRemove = (ticketId) => {
    setInProgressTasks((prev) => prev.filter((t) => t.id !== ticketId));
    setResolvedTasks((prev) => prev.filter((t) => t.id !== ticketId));
    toast.error(`Ticket removed from Task Status.`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <main
        style={{
          flex: 1,
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        <SummaryCards
          inProgressCount={inProgressTasks.length}
          resolvedCount={resolvedTasks.length}
        />
        

        <div
          className="main-content-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 320px",
            gap: "2rem",
            paddingBottom: "3rem",
          }}
        >
          

          <TicketList
            tickets={tickets.filter(
              (t) => !resolvedTasks.find((r) => r.id === t.id)
            )}
            onAddToTaskStatus={handleAddToTaskStatus}
          />
         <TaskStatus 
            inProgressTasks={inProgressTasks}
            resolvedTasks={resolvedTasks}
            onResolve={handleResolve}
            onRemove={handleRemove}
          /> 
        </div>
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
