import TicketCard from "./TicketCard";

const TicketList = ({ tickets, onAddToTaskStatus }) => {
    return (
        <div>
            <h2
                style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#1e293b",
                    marginBottom: "1.25rem",
                    fontStyle: "italic",
                }}
            >
                Customer Tickets
            </h2>

            <div
                className="ticket-grid"
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                }}
            >
                {tickets.map((ticket) => (
                    <TicketCard
                        key={ticket.id}
                        ticket={ticket}
                        onAddToTaskStatus={onAddToTaskStatus}
                    />
                ))}
            </div>
        </div>
    );
};

export default TicketList;
