import User from "../../../model/User";
import Video from "../../../model/Video";
import mongoose from "mongoose";

export default {
  Mutation: {
    likesToggle: async (_, args) => {
      const { videoId, userId } = args;

      const objectUserId = mongoose.Types.ObjectId(userId);
      try {
        const video = await Video.findOne({ _id: videoId }).populate({
          path: "likes",
          model: User,
        });

        if (video.likes.length === 0) {
          console.log("안눌러써!!");
          video.likes.push(userId);
          video.save();

          return true;
        }

        await Promise.all(
          video.likes.map((data) => {
            console.log("userID : ", userId);
            console.log("dataID : ", data);
            if (data._id === userId) {
              console.log("이미 좋아요 눌러써!!");

              return true;
            } else {
              console.log("안눌러써!!");
              video.likes.push(userId);
              video.save();

              return true;
            }
          })
        );

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
