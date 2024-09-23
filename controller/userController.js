import { getRounds } from "bcryptjs";

async function getAll(req, res) {}

async function findById(req, res) {}

async function create(req, res) {
  try {
    const { firstName, lastname, email, password, age } = req.body;
    const avatar = req.file.filename;
    const newUser = await User.create({
      firstName,
      lastname,
      email,
      password,
      age,
      avatar,
    });

    return res.status(201).json("User create");
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error");
  }
}

async function update(req, res) {}

async function destroy(req, res) {}

export default {
  getAll,
  findById,
  create,
  update,
  destroy,
};
