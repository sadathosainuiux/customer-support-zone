const TaskStatus = ({
    inProgressTasks,
    resolvedTasks,
    onResolve,
    onRemove,
}) => {
    return (
        <div className="task-status-sidebar">
            <h2>Task Status</h2>

            {inProgressTasks.length === 0 ? (
                <p className="empty-msg">Select a ticket to add to Task Status</p>
            ) : (
                <div>
                    {inProgressTasks.map((task) => (
                        <div className="task-item" key={task.id}>
                            <span className="task-item-title">{task.title}</span>
                            <div className="task-actions">
                                <button
                                    className="btn-resolve"
                                    onClick={() => onResolve(task.id)}
                                >
                                    ✓ Resolve
                                </button>
                                <button
                                    className="btn-remove"
                                    onClick={() => onRemove(task.id)}
                                >
                                    ✕
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="resolved-section">
                <h3>Resolved Task</h3>
                {resolvedTasks.length === 0 ? (
                    <p className="empty-msg">No resolved tasks yet.</p>
                ) : (
                    <div>
                        {resolvedTasks.map((task) => (
                            <div
                                className="task-item"
                                key={task.id}
                                style={{ opacity: 0.7 }}
                            >
                                <span
                                    className="task-item-title"
                                    style={{ textDecoration: "line-through" }}
                                >
                                    {task.title}
                                </span>
                                <div className="task-actions">
                                    <button
                                        className="btn-remove"
                                        onClick={() => onRemove(task.id)}
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TaskStatus;
