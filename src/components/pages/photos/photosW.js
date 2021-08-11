import styled from "styled-components";

const PhotosWrappr = styled.div`
    .border3{
        border-radius: 20px;
    }

    .mainword{
        color: white;
        font-weight: bold;
        text-shadow: 3px 4px rgba(0, 0, 0, 0.582);
        text-align: center;
        padding: 15px 0;
    }
    table{
        box-shadow: 0 5px 4px 3px rgba(0, 0, 0, 0.404);
        width: 100%;
       

        thead{
            background-color: rgb(10, 31, 128);
            color: white;
            font-weight: bold;
          
           tr{
                 
            th{
                padding: 10px;
            }
           }

        }

        tbody{
            padding: 15px !important;
            background-color: rgba(255, 255, 255, 0.37);
            .img1{
                width: 40px;
                height: 40px;
                .img2{
                    border-radius: 50%;
                    width: 100%;
                    height: 100%;
                }
            }
            .img3{
                width: 30px;
                height: 30px;
                .img2{
                    border-radius: 50%;
                    width: 100%;
                    height: 100%;
                }
            }
           p{
               padding: 5px;
           }
          
           .trinf{
               transition: 0.3s;
               &:hover{
                   
                   background-color: rgb(196, 170, 238);
               }
            td{
               padding: 0 0 0 10px;
           }
           }
           
        }
        .idStyle{
        font-weight: bold;
        color: black;
    }
    }
`;

export default PhotosWrappr;