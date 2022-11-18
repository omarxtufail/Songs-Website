let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const songs = require('../models/songs');


let Songs = require ('../models/songs');


/*Read Operation*/

router.get('/',(req,res,next)=>{
    Songs.find((err, Songslist)=>{

if(err)
{
    return console.error(err);

}
else{

   res.render('songs/list',{title: 'Songs', Songslist: Songslist});
}

    })
});

/*Add Operation*/
router.get('/add',(req,res,next)=>{
    res.render('songs/add', {title:'Add song'})
}
);

router.post('/add',(req,res,next)=>{
    let newSongs= Songs({

        "Name":req.body.Name,
        "Artist":req.body.Artist,
        "Released": req.body.Released,
        "Description": req.body.Description
    });
Songs.create(newSongs,(err, Songs) => {

    if (err)
    {

        console.log(err);
        res.end(err);
    }
    else{
        res.redirect('/Songslist')
    }
});    
});


/*Edit Operation*/
router.get('/edit/:id',(req,res,next)=>{
let id = req.params.id;
Songs.findById(id,(err,songsToEdit) => {
    if (err)
    {
     console.log(err);
        res.end(err);
    }
    else
    {
        res.render('songs/edit', {title: 'Edit Song', Songs: songsToEdit});
    }

})
});

router.post('/edit/:id',(req,res,next)=>{
    let id=req.params.id;
    let updateSongs =Songs({
        "_id":id  ,
        "Name":req.body.Name,
        "Artist":req.body.Artist,
        "Released": req.body.Released,
        "Description": req.body.Description
    })
    Songs.updateOne({_id:id}, updateSongs,(err) => {
        if (err)
        {
    
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/Songslist');
        }
    }
    )

    });




/*Delete Operation*/

router.get('/delete/:id',(req,res,next)=>{

let id = req.params.id;
Songs.deleteOne({_id:id}, (err)=>{
if (err)
{

    console.log(err);
    res.end(err);
}
else{

    res.redirect('/Songslist');
}
})

}
);


module.exports = router;










