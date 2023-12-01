const express = require('express');
const AnyDay = require('./src/routes/AnyDay');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use('/api/On-This-Day',AnyDay)

app.get('/',(req,res)=>{
        res.json({
                status:res.statusCode,
                message:"server is online!"

        })
})

app.listen(PORT, ()=>{
        console.log(`API is Running ON PORT: http://localhost:${PORT}`);
});