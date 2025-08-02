//get all users expect the logged in user

export const getUserForSidebar = async (req, res) => {
  try {
    const userId = req.user._id;
    const fliteredUser = await user
      .find({ _id: { $ne: userId } })
      .select("-password");

    //Count number of unseen messages for each user
    const unseenMessages = {};
    const promises = fliteredUser.map(async (user) => {
      const messages = await Message.find({
        sender_id: user._id,
        receiver_id: userId,
        Seen: false,
      });
      if (messages.length > 0) {
        unseenMessages[user._id] = messages.length;
      }
    });
    await Promise.all(promises);
    res.json({
      success: true,
      users: fliteredUser,
      unseenMessages,
    });
  } catch (error) {
    console.error("Error in getUserForSidebar:", error.message);
    res.json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};
