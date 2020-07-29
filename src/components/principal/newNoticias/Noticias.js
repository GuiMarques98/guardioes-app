import React from 'react';
import { format } from 'date-fns'

import { Redirect } from '../../../utils/constUtils';

import { 
    NoticeContainer,
    Header,
    TwitterInfo,
    TwitterName,
    TwitterArroba,
    Data,
    NoticiaText,
    Imagem,
    Button,
} from './styles';

function newNoticias({ data }){
    let twitterImage = null
    const date = format(new Date(data.created_at), 'dd/MM/yy') 
    console.log(date)

    if(data.hasOwnProperty('extended_entities')){
        twitterImage = data.extended_entities.media[0].media_url;
    }

  return (
    <Button
        onPress={() => Redirect(
            "Deseja abrir o Navegador?", "Você será redirecionado para twitter.com",
            `https://twitter.com/${data.user.screen_name}/status/${data.id_str}`
        )}
    >
        <NoticeContainer>
            <Header>
                <TwitterInfo>
                    <TwitterName>
                        {data.user.name}
                    </TwitterName>
                    <TwitterArroba>
                        @{data.user.screen_name}   
                    </TwitterArroba>
                </TwitterInfo>
                <Data>
                    {date}
                </Data>
            </Header>
            <NoticiaText>
                {data.text} 
            </NoticiaText>
            {twitterImage ? (
            <Imagem
                source={{
                uri: twitterImage,
                }}
            />
            ) :
                null
            }
        </NoticeContainer>
    </Button>
  );
}

export default newNoticias;