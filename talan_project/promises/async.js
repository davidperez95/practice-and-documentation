async function requestHandler(req, res) {

    try {
        const user = await User.findById(req.UserId);
        const tasks = await tasks.findById(user.tasksId);
        tasks.completed = true;
        await tasks.save();
        res.send('Task completed');
    } catch (e) {
        res.send(e);
    }
}