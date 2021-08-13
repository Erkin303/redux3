import styled from "styled-components";

const PhotosWrappr = styled.div`
    .usersCard{
        padding: 15px;
        margin: 15px;
        min-height: 250px;
        border-radius: 15px;
        box-shadow: 0 5px 4px 3px rgba(0, 0, 0, 0.404);
        background-color: white;
        box-sizing: border-box !important;
    }
    .todosCard{
        padding: 15px;
        margin: 15px;
        min-height: 240px;
        border-radius: 15px;
        box-shadow: 0 5px 4px 3px rgba(0, 0, 0, 0.404);
        background-color: white;
        box-sizing: border-box !important;

    }
    .photosCard{
        padding: 15px;
        margin: 15px;
        min-height: 260px;
        border-radius: 15px;
        box-shadow: 0 5px 4px 3px rgba(0, 0, 0, 0.404);
        background-color: white;
        box-sizing: border-box !important;
        display: flex;
        justify-content: space-between;
        flex-direction: column;

    }
    .commentsCard{
        padding: 15px;
        margin: 15px;
        min-height: 320px;
        border-radius: 15px;
        box-shadow: 0 5px 4px 3px rgba(0, 0, 0, 0.404);
        background-color: white;
        box-sizing: border-box !important;
       

    }

    .imgUrl{
        border-radius: 50%;
        margin: 5px;
        width: 70px;
        height: 70px;

    }
    

    .mainword{
        color: white;
        font-weight: bold;
        text-shadow: 3px 4px rgba(0, 0, 0, 0.582);
        text-align: center;
        padding: 15px 0;
    }
    
`;

export default PhotosWrappr;