export const checkToken=(req,res,next)=>{
    console.log(store);
    const token = req.header("Authorization")?.split(' ')[1]//store.get('token');
    console.log("tokennnnnnnn",token);
    // const decryption = jwt.verify(toekn, process.env.SECRET,);
    // if(!decryption){
    //     console.log('no token');
    // }
    jwt.verify(token, process.env.SECRET, (error, decoded) => {
        console.log("aaaaaaa",error, decoded);
        if (error || !decoded) {
            return res.status(401).send({ error: 'Authorization failed!' })
        }
    })
    next()
}
