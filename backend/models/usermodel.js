import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: false },
    lastname: { type: String, required: false, unique: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
    wilaya: {
      type: String,
      enum: {
        values: [
          "01-Adrar",
          "02-Chlef",
          "03-Laghouat",
          "04-Oum-El-Bouaghi",
          "05-Batna",
          "06-Béjaïa",
          "07-Biskra",
          "08-Béchar",
          "09-Blida",
          "10-Bouira",
          "11-Tamanrasset",
          "12-Tébessa",
          "13-Tlemcen",
          "14-Tiaret",
          "15-Tizi-Ouzou",
          "16-Alger",
          "17-Djelfa",
          "18-Jijel",
          "19-Sétif",
          "20-Saïda",
          "21-Skikda",
          "22-Sidi Bel Abbès",
          "23-Annaba",
          "24-Guelma",
          "25-Constantine",
          "26-Médéa",
          "27-Mostaganem",
          "28-M’sila",
          "29-Mascara",
          "30-Ouargla",
          "31-Oran	Said ",
          "32-El Bayadh",
          "33-Illizi",
          "34-Bordj Bou Arreridj",
          "35-Boumerdès",
          "36-El-Tarf",
          "37-Tindouf",
          "38-Tissemsilt",
          "39-El-Oued",
          "40-Khenchela",
          "41-Souk-Ahras",
          "42-Tipaza",
          "43-Mila",
          "44-Aïn-Defla",
          "45-Naâma",
          "46-Aïn-Témouchent",
          "47-Ghardaïa",
          "48-Relizane",
          "49-El M-Ghair",
          "50-El Meniaa",
          "51-Ouled Djellal",
          "52-Bordj Badji Mokhtar",
          "53-Béni Abbès",
          "54-Timimoun",
          "55-Touggourt",
          "56-Djanet",
          "57-In Salah",
          "58-In Guezz",
        ],
        message: "Choisir ta wilaya",
      },
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", userSchema);

export default User;
