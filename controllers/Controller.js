const Post = require('../models/Post');

const allPost = async (req, res) => {

    Post.findAll().
        then((posts) => {
            res.render('allPosts', { posts: posts })
        })
}


const newPost = (req, res) => {

    Post.create({
        cliente: req.body.cliente,
        num_conteiner: req.body.num_conteiner,
        tipo: req.body.tipo,
        status: req.body.status,
        categoria: req.body.categoria,
        movimentacao: req.body.movimentacao
    }).then(() => {
        res.redirect('/');
    }).catch((error)=>{
        res.send("Houve um erro " + error);
    });
}


const deletePost = (req, res) =>{

    Post.destroy({where: {'id': req.params.id} }).then(()=>{
        res.redirect('/all');
    }).catch((error)=>{
        res.send("Houve um erro " + error);
    });
}

const loadPost = async (req, res) =>{

    let id = req.params.id;

    try{
        let doc = await Post.findByPk(id);
        res.render('edit', {error: false, body: doc})
    }catch(error){
        res.send(error);
    }

}


const editPost = async (req, res) =>{

    let id = req.params.id;

    const newInfo = req.body

    try{

        Post.update(newInfo, {where: {id: Number(id)}})
        res.redirect('/all')
    }catch(error){
        return error;
    }
}


module.exports = {allPost, newPost, deletePost, loadPost, editPost}