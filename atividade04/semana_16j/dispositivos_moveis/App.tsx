import React from 'react';
import { View, Image, FlatList } from 'react-native';

const images = [
    
  {
    id: 1,
    origem: 'internet',
    url: { uri: 'https://s2.glbimg.com/cYa3pKAKIPidjKyGPuAd8T4Hd1I=/e.glbimg.com/og/ed/f/original/2017/08/21/dog-2570398_960_720.jpg' },
  },
   {
    id: 2,
    origem: 'internet',
    url: { uri: 'https://cdn.acritica.net/img/pc/450/300/dn_arquivo/2023/03/unnamed_2.jpg' },
  },
   {
    id: 3,
    origem: 'internet',
    url: { uri: 'https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/01-animals-social-distancing-nationalgeographic_110344.jpg?w=1600&h=900' },
  },
   {
    id: 4,
    origem: 'internet',
    url: { uri: 'https://www.petz.com.br/blog/wp-content/uploads/2022/06/animais-selvagens-3-1280x720.jpg' },
  },
   {
    id: 5,
    origem: 'internet',
    url: { uri: 'https://images.educamaisbrasil.com.br/content/noticias/governo-proibe-testes-em-animais-para-cosmeticos-e-outros-produtos_g.jpg' },
  },
    {
    id: 6,
    origem: 'internet',
    url: { uri: 'https://blog-leiturinha-novo.s3.us-east-1.amazonaws.com/production/uploads/2022/06/iStock-1314796448-1.jpg' },
  },
    {
    id: 7,
    origem: 'internet',
    url: { uri: 'https://s3.amazonaws.com/blog.dentrodahistoria.com.br/wp-content/uploads/2020/02/28175747/animais-do-gelo-800x500.jpg' },
  },
    {
    id: 8,
    origem: 'internet',
    url: { uri: 'https://classic.exame.com/wp-content/uploads/2019/08/gettyimages-1041987488.jpg?quality=70&strip=info&w=1024' },
  },
    {
    id: 9,
    origem: 'internet',
    url: { uri: 'https://www.worldanimalprotection.org.br/sites/default/files/styles/600x400/public/media/1015615.jpg?h=9ca80322&itok=usZr7nH-' },
  },
    {
    id: 10,
    origem: 'internet',
    url: { uri: 'https://img.ibxk.com.br/2017/07/13/13160112901226.jpg?ims=328x' },
  },
  
];

const ImageList = () => {
  const renderImage = ({ item }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', margin: 1 }}>
        {item.origem === 'local' ? (
          <Image
            source={item.url}
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
          />
        ) : (
          <Image
            source={item.url}
            style={{ width: '100%', aspectRatio: 1 }}
            resizeMode="cowver"
          />
        )}
      </View>
    );
  };

  return (
    <FlatList
      data={images}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderImage}
      contentContainerStyle={{ flexGrow: 1 }}
      numColumns={2}
    />
  );
};

export default ImageList;