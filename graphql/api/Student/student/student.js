import Lecture from "../../../model/Lecture";
import Student from "../../../model/Student";

export default {
  Query: {
    getAllStudent: async (_, args) => {
      try {
        const result = await Student.find({}, {});

        console.log(result);

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },
    getStudentGte: async (_, args) => {
      const { age } = args;

      try {
        const result = await Student.find(
          {
            age: { $gte: age },
          },
          {}
        );
      } catch (e) {
        console.log(e);
        return [];
      }
    },
  },
};
