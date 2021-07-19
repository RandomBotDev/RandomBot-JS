const express = require('express')
const axios = require("axios")
const fs = require("fs")
const app = express()
const port = 8289
var path = require('path');

html = file => path.join(__dirname + `/web/html/${file}`)
css = file => path.join(__dirname + `/web/css/${file}`)
js = file => path.join(__dirname + `/web/js/${file}`)

app.get('/', async (req, res) => {
	//res.send("<title>RandomBot JS</title><center>Im going to add something here later. In the mean time invite me <a href=\"/invite\">here</a> or join my support server <a href=\"/support\">here</a> also i have slash commands so that invite is <a href=\"/slash\">here</a>.</center>");
	res.sendFile(html("index.html"));
});

app.get('/css/main.css', async (req, res) => {
	res.sendFile(css("main.css"));
});

app.get('/css/buttons.css', async (req, res) => {
	res.sendFile(css("buttons.css"));
});

app.get('/css/noselect.css', async (req, res) => {
	res.sendFile(css("noselect.css"));
});

app.get('/js/buttons.js', async (req, res) => {
	res.sendFile(js("buttons.js"));
});

app.get('/js/rotate.js', async (req, res) => {
	res.sendFile(js("rotate.js"));
});

app.get('/css/border.css', async (req, res) => {
	res.sendFile(css("border.css"));
});

app.get('/css/rotate.css', async (req, res) => {
	res.sendFile(css("rotate.css"));
});

app.get('/support', async (req, res) => {
	//res.send("<html><head><meta charset=\"utf-8\"><title>RandomBot Invite</title><meta content=\"RandomBot\" property=\"og:title\"><meta content=\"The link to the RandomBot JS support server, just a redirect.\" property=\"og:description\"><meta content=\"https://js.randombot.tk/invite\" property=\"og:url\"><meta content=\"https://cdn.discordapp.com/avatars/716309071854174268/da597c1ceb8aac700263b371bc3c1fc2.webp?size=512\" property=\"og:image\"><meta content=\"#43B581\" data-react-helmet=\"true\" name=\"theme-color\"><meta http-equiv=\"refresh\" content=\"0; url = https://discord.gg/3vFQFHg7Xj\" /></head><body><p>Redirecting you to the support server.</p></body></html>")
	res.sendFile(html("support.html"));
});

app.get('/slash', async (req, res) => {
	//res.send("<html><head><meta charset=\"utf-8\"><title>RandomBot Invite</title><meta content=\"RandomBot\" property=\"og:title\"><meta content=\"The link to the RandomBot JS slash command invite, just a redirect.\" property=\"og:description\"><meta content=\"https://js.randombot.tk/slash\" property=\"og:url\"><meta content=\"https://cdn.discordapp.com/avatars/716309071854174268/da597c1ceb8aac700263b371bc3c1fc2.webp?size=512\" property=\"og:image\"><meta content=\"#43B581\" data-react-helmet=\"true\" name=\"theme-color\"><meta http-equiv=\"refresh\" content=\"0; url = https://discord.com/api/oauth2/authorize?client_id=796745904228401202&permissions=8&scope=bot%20applications.commands\" /></head><body><p>Redirecting you to the slash command invite.</p></body></html>")
	res.sendFile(html("slash.html"));
});

app.get('/invite', async (req, res) => {
	//res.send("<html><head><meta charset=\"utf-8\"><title>RandomBot Invite</title><meta content=\"RandomBot\" property=\"og:title\"><meta content=\"The link to invite RandomBot JS, just a redirect.\" property=\"og:description\"><meta content=\"https://js.randombot.tk/invite\" property=\"og:url\"><meta content=\"https://cdn.discordapp.com/avatars/716309071854174268/da597c1ceb8aac700263b371bc3c1fc2.webp?size=512\" property=\"og:image\"><meta content=\"#43B581\" data-react-helmet=\"true\" name=\"theme-color\"><meta http-equiv=\"refresh\" content=\"0; url = https://discord.com/api/oauth2/authorize?client_id=796745904228401202&permissions=8&scope=bot\" /></head><body><p>Redirecting you to the invite.</p></body></html>")
	res.sendFile(html("invite.html"));
});

app.get("/api/eject", async (req, res) => {
	name = req.query.name
	impostor = req.query.impostor
	crewmate = req.query.crewmate
	eject = await axios.get(`https://vacefron.nl/api/ejected?name=${name}&impostor=${impostor}&crewmate=${crewmate}`, {
		responseType: 'arraybuffer'
	}).catch((err) => {
		res.sendStatus(err.response.status)
		throw err
	})
	img_b64 = Buffer.from(eject.data, 'binary').toString('base64')
	img = Buffer.from(img_b64, 'base64');
	res.writeHead(200, {
		'Content-Type': 'image/png',
		'Content-Length': img.length
	});
	res.end(img)
})

app.listen(port, async () => {
	console.log('Web server running.')
})