import vector1 from '../assets/vector1.png';
import vector2 from '../assets/vector2.png';

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
                <img
                    src={vector1}
                    alt="vector 1"
                    style={{ position: 'absolute', left: 0, top: 0, opacity: 0.8, maxHeight: '100%', objectFit: 'contain' }}
                />
                <img
                    src={vector2}
                    alt="vector 2"
                    style={{ position: 'absolute', right: 0, top: 0, opacity: 0.8, maxHeight: '100%', objectFit: 'contain' }}
                />
                <h3>In-Progress</h3>
                <div className="count">{inProgressCount}</div>
            </div>

            <div className="summary-card resolved">
                <img
                    src={vector1}
                    alt="vector 1"
                    style={{ position: 'absolute', left: 0, top: 0, opacity: 0.8, maxHeight: '100%', objectFit: 'contain' }}
                />
                <img
                    src={vector2}
                    alt="vector 2"
                    style={{ position: 'absolute', right: 0, top: 0, opacity: 0.8, maxHeight: '100%', objectFit: 'contain' }}
                />
                <h3>Resolved</h3>
                <div className="count">{resolvedCount}</div>
            </div>
        </div>
    );
};

export default SummaryCards;
