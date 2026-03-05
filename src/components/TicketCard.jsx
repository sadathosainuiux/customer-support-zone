const TicketCard = ({ ticket, onAddToTaskStatus }) => {
    const getStatusClass = (status) => {
        switch (status) {
            case "Open":
                return "open";
            case "In-Progress":
                return "in-progress";
            case "Resolved":
                return "resolved";
            default:
                return "open";
        }
    };

    const getPriorityClass = (priority) => {
        if (priority.includes("HIGH")) return "priority-high";
        if (priority.includes("MEDIUM")) return "priority-medium";
        if (priority.includes("LOW")) return "priority-low";
        return "";
    };

    return (
        <div className="ticket-card" onClick={() => onAddToTaskStatus(ticket)}>
            <div className="ticket-header">
                <h3 className="ticket-title">{ticket.title}</h3>
                <span className={`status-badge ${getStatusClass(ticket.status)}`}>
                    {ticket.status}
                </span>
            </div>

            <p className="ticket-desc">{ticket.description}</p>

            <div className="ticket-meta">
                <span className="ticket-id">{ticket.id}</span>
                <span className={getPriorityClass(ticket.priority)}>
                    {ticket.priority}
                </span>
                <span className="ticket-assignee">{ticket.customer}</span>
                <span className="ticket-date">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    {ticket.createdAt}
                </span>
            </div>
        </div>
    );
};

export default TicketCard;
