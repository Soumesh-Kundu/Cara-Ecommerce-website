const express=require("express")
const app=express()
const path=require("path")
const port=80
const home_path=path.join(__dirname,'/Static/HTML/Home.html')
const Shop_path=path.join(__dirname,'/Static/HTML/shop.html')
const SProduct_path=path.join(__dirname,'/Static/HTML/shopproduct.html')

//using the Static folder
app.use('/static',express.static(path.join(__dirname,"Static")))
console.log(path.join(__dirname,'/Static/HTML/Home.html'))

app.get('/',(req,res)=>{
    res.status(200).sendFile(home_path)
})
app.get('/Shop',(req,res)=>{
    res.status(200).sendFile(Shop_path)
})
app.get('/ShopProduct',(req,res)=>{
    res.status(200).sendFile(SProduct_path)
})

app.listen(port,()=>{
    console.log(`the server is running on port ${port}`)
})