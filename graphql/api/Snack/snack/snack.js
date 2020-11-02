import Snack from "../../../model/Snack";

export default {
  Query: {
    getAllSnack: async (_, args) => {
      try {
        const result = await Snack.find({ price: { $lte: 1500 } }, {}).populate(
          {
            path: `snackList`,
            model: Snack,
          }
        );
        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },

    getSnackGte: async (_, args) => {
      const { price } = args;

      try {
        const result = await Snack.find(
          {
            price: { $gte: price },
          },
          {}
        );
      } catch (e) {
        console.log(e);
        return [];
      }
    },
    getSnackLte: async (_, args) => {
      const { price } = args;

      try {
        const result = await Snack.find(
          {
            price: { $lte: price },
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
