import express from "express"
import {Prisma, PrismaClient} from "@prisma/client"
import cors from "cors"

import { convertHourStringToMinutes } from "./utils/convert-hour-string-to-minutes"
import { convertMinutesStringToHourString } from "./utils/convert-minutes-string-to-minutes copy"

const app = express()

//  app.use(express.json)
 const prisma = new PrismaClient({
     log: ["query"]
 })
 app.use(cors())


app.get("/games",  async (request, response) => {
     const games = await prisma.game.findMany({
         include:{
             _count:{
                 select:{
                     ads:true
                 }
             }
         }
     })
    
    return response.json(games)
})

// httpcode status 201 = created
 app.post("/games/:id/ads", async(request, response) => {
     const gameId = request.params.id
     const body = request.body

 const ad= await prisma.ad.create({
    data: { 
     gameId,
     name  : body.name,
     yearsPlaying  : body.yearsPlaying,
     discord    : body.discord,
     weekDays   : body.weekDays.join(","),
     hourStart  : convertHourStringToMinutes(body.hourStart),
     hourEnd    : convertHourStringToMinutes(body.hourEnd),
     useVoiceChannel : body.useVoiceChannel,
     createdAt  : body.createdAt,
     }
     })

     return response.status(201).json(ad)
 })


 app.get("/games/:id/ads", async(request:any, response:any) => {
 const gameId = request.params.id
 const ads = await prisma.ad.findMany({
     select:{
         id:true,
         name:true,
         weekDays:true,
         useVoiceChannel: true,
         yearsPlaying:true,
         hourStart: true,
         hourEnd: true,
     },
     where:{
         gameId
     },
     orderBy:{
         createdAt:"desc"
     }
 })

     return response.json(ads.map(ad => {
         return {
             ...ad,
             weekDays: ad.weekDays.split(","),
             hourStart:convertMinutesStringToHourString(ad.hourStart),
             hourEnd: convertMinutesStringToHourString(ad.hourEnd)
         }
     }))
 })

 app.get("/ads/:id/discord", async (request:any, response:any) => {
    const adId = request.params.id
    const ad= await prisma.ad.findUniqueOrThrow({
     select:{
         discord: true,
     },
     where:{
         id: adId,
     }
    })
   
     return response.json({discord: ad.discord})
 })


app.listen(3333, () => {
    console.log(`Example app listening on port ${3333}`)})