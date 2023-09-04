const { Bot } = require('../../structures/client')
const randomstring = require('randomstring')
const fs = require('fs')
const Discord = require('discord.js')
const request = require('request')
const ms = require("enhanced-ms")
const { exec } = require('node:child_process')

module.exports = {
    name: 'ready',

    /**
     * 
     * @param {Bot} client 
     */
    run: async (client) => {
       
        setInterval(() => {
           
        if (client.db.get(`isActivityOn`) === "remove") {
            client.user.setPresence({ status: 'online' })
        }
        
        if (client.db.get(`isActivityOn`) === "invisible") {
            client.user.setPresence({ status: 'invisible' })
        }

        if (client.db.get(`isActivityOn`) === true) {
        client.user.setActivity(client.db.get(`texte.activity`), { type: client.db.get(`type.activity`), url: "https://www.twitch.tv/SupremeB0ts" })
        }

        if (!client.db.get(`isActivityOn`) || client.db.get(`isActivityOn`) === null || client.db.get(`isActivityOn`) === undefined) {
            client.user.setActivity(`SupremeBots ${client.version}`, { type: "STREAMING", url: "https://www.twitch.tv/SupremeB0ts" })
        }
        
        }, ms("5m"))

    }
}