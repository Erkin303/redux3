import styled from "styled-components";

const DashboradWrappr = styled.div`
    display: flex;
    height: 100%;
    .rightul{
        display: flex;
        align-items:center;
    }
  
   
    .sidebar{
        width: 0;
        transition: 0.9s;
        background-color: rgba(41, 125, 182, 0.993) ;
        height: 100vh;
        
        margin: 15px !important;
        border-radius: 20px !important;
        position: sticky !important;
        top: 0;
        left: 0;

        &.show{
            ul{
                margin:10px 0;
                padding: 0;
            }
            width: 270px;
            li{
                margin: 17px;
                p{
               padding: 7px;
               background-color: white;
               border-radius: 10px;
               font-weight: bold;
               font-size: 17px;
               color: rgba(41, 125, 182, 0.993);
               box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.582);
           }
            }
          
        }
        a{
        text-decoration: none;
        color: black;
        width: 100%;
        &:hover{
            text-decoration: none;
            color: black;
        }
    }

        .forHover:hover{
            color: white;
            background-color: rgba(41, 125, 182, 0.7) ;
            transition: 0.4s;
        }
    ul{
        list-style-type: none;
        width: 60%;
        padding: 0 0 0 0 !important;
        li{
           
           p{
               padding: 0;
               background-color: white;
               border-radius: 10px;
               font-weight: bold;
               font-size: 17px;
               box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.582);
           }
        border-radius: 10px;
        }
    }

    }
    

    .rightSide{
        flex: 1;
        height: 100%;
        
        header{
            background-color: rgba(41, 125, 182, 0.993);
            padding: 10px;
            box-shadow: 0 2px 3px 0 black;
            position: sticky !important;
            top: 0;
            z-index:100;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 10vh;
            margin: 15px 0 0 15px;
            border-radius: 20px;
            color: white;
            font-weight: bold;
           
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
           background-color: white;
            padding: 20px;
            min-height:90vh;
            margin: 0 10px;
            border-radius: 20px;
          
        }
    }
    .dashb{
            display: block;
        }

    @media screen and (max-width:850px){
        .rightul{
            display:none;
        }
        .dashb{
            display: none !important;
        }
        .sidebar{
            
            ul{
                width: auto;
                li{
                    margin: 0 !important;
                  
                }
            }
        }
        .show{
                width: 60px !important;
                display: flex;
                justify-content:center;
                ul{
                    padding-top: 10px;
                }
            }
        .sidebarWords{
            display: none;
        }
    }

`;

export default DashboradWrappr;