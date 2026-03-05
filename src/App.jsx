import { useState } from "react";
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
      return;
    }
    setInProgressTasks((prev) => [...prev, ticket]);
  };

  const handleResolve = (ticketId) => {
    const ticket = inProgressTasks.find((t) => t.id === ticketId);
    if (ticket) {
      setInProgressTasks((prev) => prev.filter((t) => t.id !== ticketId));
      setResolvedTasks((prev) => [...prev, ticket]);
    }
  };

  const handleRemove = (ticketId) => {
    setInProgressTasks((prev) => prev.filter((t) => t.id !== ticketId));
    setResolvedTasks((prev) => prev.filter((t) => t.id !== ticketId));
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
    </div>
  );
}

export default App;
