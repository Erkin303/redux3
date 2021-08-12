import styled from "styled-components";

const DashboradWrappr = styled.div`
    display: flex;
   
    .sidebar{
        width: 270px;
        background: rgb(135,65,181);
        background: linear-gradient(90deg, rgba(135,65,181,1) 0%, rgba(34,78,170,1) 29%, rgba(93,218,226,1) 70%, rgba(74,66,167,1) 100%);  
        height: 100vh;
        a{
        text-decoration: none;
        color: black;
        width: 100%;
      
        
        
        &:hover{
            text-decoration: none;
            color: black;
        }
    }
    ul{
        list-style-type: none;
        li{
            margin: 17px;
           
           p{
               padding: 7px;
               background-color: white;
               border-radius: 10px;
               font-weight: bold;
               font-size: 17px;
           }
        border-radius: 10px;
        }
    }

    }
    .rightSide{
        flex: 1;
        height: 100vh;
        header{
            padding: 10px;
            box-shadow: 0 2px 3px 0 black;
            position: sticky;
            top: 0;
            z-index:100;
            background-color: white;
            display: flex;
            justify-content: space-between;
            height: 10vh;
           
            img{
                width: 80px;
                height: auto;
            }
            ul{
                display: flex;
                list-style-type: none;
                padding-top: 10px;
                li{
                   padding: 0 10px;
                    a{
                        text-decoration: none;
                        color: black;
                    }
                }
            }
        }
        
        .content{
            background: rgb(135,65,181);
            background: linear-gradient(90deg, rgba(135,65,181,1) 0%, rgba(34,78,170,1) 29%, rgba(93,218,226,1) 67%, rgba(74,66,167,1) 100%);            padding: 20px;
            overflow-y: scroll !important;
            height: 90vh;
        }
    }

    @media screen and (max-width:700px){
        .sidebar{
            display: none;
        }
    }

`;

export default DashboradWrappr;