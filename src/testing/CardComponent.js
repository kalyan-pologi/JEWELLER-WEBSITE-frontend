// import {
//   Box,
//   Button,
//   Card,
//   CardActions,
//   CardContent,
//   CardMedia,
//   Checkbox,
//   Container,
//   Grid,
//   Modal,
//   styled,
//   Typography,
// } from "@mui/material";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";

// import React, { useState } from "react";
// import { borderRadius, style } from "@mui/system";

// const CardComponent = () => {
//   const [openPhoto, setOpenPhoto] = useState(false);
  
//   const StyleModal = styled(Modal)({
//     display:"flex",
//     alignItems:"center",
//     justifyContent:"center"
//   })


//   return (
//     <Box
//       display="grid"
//       gap={1}
//       gridTemplateColumns="repeat(auto-fit, minmax(10rem, 20rem))"
//       gridTemplateRows="repeat(auto-fit)"
//     >
//       <Box>
//         <Card>
//           <CardMedia
//             onClick={(e) => setOpenPhoto(true)}
//             component="img"
//             alt="green iguana"
//             height="250"
//             image="https://picsum.photos/300/200"
           
//           />

//           <CardContent>
//             <Typography gutterBottom variant="h6" component="div">
//               Lizard
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Lizards are a widespread group of squamate reptiles, with over
//               6,000 species, ranging across all continents except Antarctica
//             </Typography>
//           </CardContent>
//           <CardActions disableSpacing>
//             <Button size="large">
//               <FavoriteIcon />
//             </Button>
//             {/* <Checkbox icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon />} /> */}
//             <Button size="large">
//               <ShareIcon />
//             </Button>
//           </CardActions>
//         </Card>
//       </Box>
//       <StyleModal
//         open={openPhoto}
//         onClose={(e) => setOpenPhoto(false)}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={{
//             width:"70%",
//             height:"70%",
//             padding:"2rem",
//             background:"white",
//             borderRadius:"1rem",
//             margin:"1rem"
//         }} >
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Text in a modal
//           </Typography>
//           <CardMedia
//             component="img"
//             alt="green iguana"
//             height="90%"
//             image="https://picsum.photos/300/200"
//           />
//         </Box>
//       </StyleModal>
      
//     </Box>
//   );
// };

// export default CardComponent;
