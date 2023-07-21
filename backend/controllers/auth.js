
const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const register = async (req, res) => {
    const { password, email } = req.body
    if (!password || password.length < 6) {
        throw new BadRequestError('Please provide password')
    }
    if (!email) {
        throw new BadRequestError('Please provide email')
    }
    const user = await User.create({ ...req.body })
    const token = user.createJWT()
    res.status(StatusCodes.OK)
        .json({
            user: {
                firstname: user.firstname,
                lastname: user.lastname
            },
            token
        });
};

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        throw new BadRequestError("Please provide email and password");
    }
    const user = await User.findOne({
        email,
        authType: 'local'
    });
    if (!user) {
        throw new UnauthenticatedError("Email or password is incorrect");
    }
    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
        throw new UnauthenticatedError("Email or password is incorrect");
    }
    const token = user.createJWT();
    res.status(StatusCodes.OK)
        .json({
            user: {
                firstname: user.firstname,
                lastname: user.lastname
            },
            token
        });
};

const registerGoogle = async (req, res, next) => {
    const dataUser = req.user
    if (!dataUser) {
        throw new UnauthenticatedError('Get information user fail')
    }
    const { familyName: lastname, givenName: firstname } = dataUser.name
    if (!lastname || !firstname) {
        throw new UnauthenticatedError('Get information user fail')
    }
    const id = dataUser.id
    const email = 'gg' + id
    const user = await User.create({
        firstname,
        lastname,
        email,
        authType: 'google'
    })
    const token = user.createJWT()
    res.status(StatusCodes.OK)
        .json({
            user: {
                firstname: user.firstname,
                lastname: user.lastname
            },
            token
        });
}

const loginGoogle = async (req, res, next) => {
    const dataUser = req.user
    if (!dataUser) {
        throw new UnauthenticatedError('Get information user fail')
    }
    const { familyName: lastname, givenName: firstname } = dataUser.name
    if (!lastname || !firstname) {
        throw new UnauthenticatedError('Get information user fail')
    }
    const id = dataUser.id
    const email = 'gg' + id
    const user = await User.findOne({
        email,
        authType: 'google'
    })
    const token = user.createJWT()
    res.status(StatusCodes.OK)
        .json({
            user: {
                firstname: user.firstname,
                lastname: user.lastname
            },
            token
        });
}

const registerFacebook = async (req, res, next) => {
    const dataUser = req.user
    // return res.json({ msg: dataUser })
    if (!dataUser) {
        throw new UnauthenticatedError('Get information user fail')
    }
    const { familyName: lastname, givenName: firstname } = dataUser.name
    if (!lastname || !firstname) {
        throw new UnauthenticatedError('Get information user fail')
    }
    const id = dataUser.id
    const email = 'fb' + id
    const user = await User.create({
        firstname,
        lastname,
        email,
        authType: 'facebook'
    })
    const token = user.createJWT()
    res.status(StatusCodes.OK)
        .json({
            user: {
                firstname: user.firstname,
                lastname: user.lastname
            },
            token
        });
}

const loginFacebook = async (req, res, next) => {
    const dataUser = req.user
    if (!dataUser) {
        throw new UnauthenticatedError('Get information user fail')
    }
    const { familyName: lastname, givenName: firstname } = dataUser.name
    if (!lastname || !firstname) {
        throw new UnauthenticatedError('Get information user fail')
    }
    const id = dataUser.id
    const email = 'fb' + id
    const user = await User.findOne({
        email,
        authType: 'facebook'
    })
    const token = user.createJWT()
    res.status(StatusCodes.OK)
        .json({
            user: {
                firstname: user.firstname,
                lastname: user.lastname
            },
            token
        });
}

module.exports = {
    register,
    login,
    registerGoogle,
    loginGoogle,
    registerFacebook,
    loginFacebook,
};
