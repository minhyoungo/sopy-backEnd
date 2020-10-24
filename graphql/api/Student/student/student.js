import Student from "../../../model/Student";

export default {
  Query: {
    getAllStudent: async (_, args) => {
      try {
        const result = await Student.find({}, {});

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },
  },
};
