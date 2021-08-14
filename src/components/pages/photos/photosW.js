import styled from "styled-components";

const PhotosWrappr = styled.div`
    .usersCard{
        padding: 15px;
        margin: 15px;
        min-height: 250px;
        border-radius: 15px;
        box-shadow: 0 5px 4px 3px rgba(0, 0, 0, 0.404);
        background-color: rgba(185, 217, 238, 0.993);
        box-sizing: border-box !important;
        color: black;
        font-weight: bold;
        &:hover{
            transition:0.3s;
            box-shadow: 0 7px 6px 5px rgba(0, 0, 0, 0.404);
        }
        a{
            text-decoration: none;
            color: gray;
        }
    }
    .todosCard{
        padding: 15px;
        margin: 15px;
        min-height: 240px;
        border-radius: 15px;
        box-shadow: 0 5px 4px 3px rgba(0, 0, 0, 0.404);
        background-color: rgba(185, 217, 238, 0.993);
        box-sizing: border-box !important;

    }
    .photosCard{
        padding: 15px;
        margin: 15px;
        min-height: 260px;
        border-radius: 15px;
        box-shadow: 0 5px 4px 3px rgba(0, 0, 0, 0.404);
        background-color: rgba(185, 217, 238, 0.993);
        box-sizing: border-box !important;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
         &:hover{
            transition:0.3s;
            box-shadow: 0 7px 6px 5px rgba(0, 0, 0, 0.404);
        }

    }
    .commentsCard{
        padding: 15px;
        margin: 15px;
        min-height: 350px;
        border-radius: 15px;
        box-shadow: 0 5px 4px 3px rgba(0, 0, 0, 0.404);
        background-color: rgba(185, 217, 238, 0.993);
        box-sizing: border-box !important;
        a{
            text-decoration: none;
            color: gray;
        }
         &:hover{
            transition:0.3s;
            box-shadow: 0 7px 6px 5px rgba(0, 0, 0, 0.404);
        }
       

    }

    .imgUrl{
        border-radius: 50%;
        margin: 5px;
        width: 70px;
        height: 70px;

    }
    

    .mainword{
        color: rgba(39, 53, 61, 0.993);
        font-weight: bold;
        text-shadow: 1px 1px rgba(0, 0, 0, 0.582);
        text-align: center;
        padding: 15px 0;
    }
    
`;

export default PhotosWrappr;