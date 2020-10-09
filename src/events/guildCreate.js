/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-unresolved
const mongoose = require('mongoose')
const Guild = require('../models/guild')

module.exports = async (client, guild) => {
    guild = new Guild({
        _id: mongoose.Types.ObjectId(),
        guildID: guild.id,
        guildName: guild.name,
    })

    guild
        .save()
        .then((result) => console.log(result))
        .catch((err) => console.err(err))

    console.log('I have joined a new server!')
}
