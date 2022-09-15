import express from "express"

const app = express()

app.get("/games", (request, response) => {
    return response.json([])
})

//httpcode status 201 = created
app.post("/ads", (request, response) => {
    return response.status(201).json([])
})


app.get("/games/:id/ads", (request:any, response:any) => {
    return response.json([
        {id:1, name:"Anúncio 1"},
        {id:2, name:"Anúncio 2"},
        {id:3, name:"Anúncio 3"},
        {id:4, name:"Anúncio 4"}
    ])
})

app.get("/ads/:id/discord", (request:any, response:any) => {
    return response.json([
        {id:1, name:"Anúncio 1"},
        {id:2, name:"Anúncio 2"},
        {id:3, name:"Anúncio 3"},
        {id:4, name:"Anúncio 4"}
    ])
})

app.listen(3333)