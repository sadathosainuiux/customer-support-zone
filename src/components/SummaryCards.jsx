const SummaryCards = ({ inProgressCount, resolvedCount }) => {
    return (
        <div
            className="summary-cards-grid"
            style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.5rem",
                padding: "2rem 0",
            }}
        >
            <div className="summary-card in-progress">
                <h3>In-Progress</h3>
                <div className="count">{inProgressCount}</div>
            </div>

            <div className="summary-card resolved">
                <h3>Resolved</h3>
                <div className="count">{resolvedCount}</div>
            </div>
        </div>
    );
};

export default SummaryCards;
