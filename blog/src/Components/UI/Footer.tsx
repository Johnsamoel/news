import {  Button, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Logo from './Logo';
import RecentPost from './RecentPost';


const Footer = () => {

    const Tags = ['Bike' , 'Building' , 'Craft' , 'Camera' , 'Gear' , 'Girl' , 
    'Jumping' , 'Lake' , 'LifeStyle' , 'Master' , 'Mock-Up' , 'Motivation' , 'Mountains' , 
    'Movie' , 'NoteBook' , 'Office' , 'StormTroper' , 'swimming' , 'Trooper']


    const RecnetPost = [ { id: '01' , avatar: 'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/28/2019/09/101_0017_alexandru-acea-AUYYJQZXArM-unsplash-1200x675.jpg',title:'Main events are finally ready. Lets hope for the best' }
, { id:'02' ,avatar: 'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/28/2016/11/14-1200x675.jpg',title:'Stormtrooper is here to save your day' },
{ id:'03' , avatar:'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/28/2019/09/101_0022_alexandru-acea-XHqTv6E5YDU-unsplash-1200x675.jpg' , title:'First steps in the right direction' }
]
    return (
        <>
            <Box sx={{backgroundColor:'#262626'  , color:'whitesmoke' , gap:'2rem' , padding:'2rem' }}>
                <Stack direction='row' sx={{width:'100%' , height:'100%'}} flexWrap='wrap' justifyContent='space-around' alignItems='start'> 
                    {/* section one */}
                <Stack sx={{width:{ lg:"30%"  , md:"30%" , sm:'30%' ,xs:"100%"}  , padding:"2rem"  }} justifyContent='flex-start' alignItems='center' gap={2}>
                <Logo />
                <Typography sx={{fontFamily:'cursive' , textAlign:'start'}}>Pellentesque placerat tincidunt urna, vitae feugiat magna vestibulum non. Mauris ut sagittis est. Pellentesque a felis est. Duis in risus metus. Cras felis ante, sodales eget pretium eu, hendrerit at metus. Maecenas aliquam dictum sapien id ornare.</Typography>
                </Stack>

                {/* section two */}
                <Stack sx={{width:{ lg:"30%"  , md:"30%" , sm:'30%' ,xs:"100%"}   , padding:"2rem"  }} justifyContent='flex-start' alignItems='center' gap={2}>
                <Typography sx={{textAlign:'start' , fontWeight:'bold' , fontFamily:'poppins' , width:'100%' ,   marginLeft:'7rem' }}>Recent Posts</Typography>
                <Stack sx={{width:'100%' , height:'100%'  , padding:"1rem"  }} justifyContent='flex-start' alignItems='center'  direction='row' gap={1} flexWrap='wrap'>
                {RecnetPost?.map((  {id , title , avatar }  ) => <RecentPost src={avatar} title={title} key={id} id={id} />)}
                </Stack>
                </Stack>

                {/* section three */}

                <Stack sx={{width:{ lg:"30%"  , md:"30%" , sm:'30%' ,xs:"100%"}   , padding:"2rem"  }} justifyContent='flex-start' alignItems='center' gap={1}>
                <Typography sx={{textAlign:'start' , fontWeight:'bold' , fontFamily:'poppins' , width:'100%' , marginLeft:'2rem' }}>Tags</Typography>
                <Stack sx={{width:'100%' , height:'100%'  , padding:"1rem"  }} justifyContent='flex-start' alignItems='center'  direction='row' gap={1} flexWrap='wrap'>
                {Tags?.map((Tag) => <Button key={Tags.indexOf(Tag)} variant='contained' sx={{backgroundColor:'#3A3A3A' , color:'white' }}>{Tag.toLocaleUpperCase()}</Button>)}
               
                </Stack>
               
                </Stack>

                </Stack>

            </Box>
            <Box sx={{backgroundColor:'#222222' , padding:'0.5rem'}} >
            <Typography sx={{color:'white' , fontSize:'1rem' , fontFamily:'poppins' , fontWeight:'bolder' , textAlign:'center'}}>Made by
            <Typography component='span' sx={{color:'white' , fontSize:'1.5rem' , fontFamily:'Montserrat' , fontWeight:'bolder' , textAlign:'center' , display:'inline-block' , paddingLeft:'15px'}}>John Samoel</Typography> 
             </Typography>
            </Box>
            </>
    );
};

export default Footer;