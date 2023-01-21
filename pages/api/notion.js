import { getDatabase } from '../../library/notion';

const axios = require('axios')

export default async  (req,res) =>{
  const databaseId = req.body.databaseId
 console.log('req.b',req.body.databaseId)
  const NOTION_API_URL = 'https://api.notion.com';

  const database = await getDatabase(databaseId);
  console.log('database',database)
    // const headers = {
    // 'Authorization': 'Bearer secret_Jk4OZPnpBoqyzOgxCrAT8hoKCgEEQCqyuZTxJKKTriE',
    // 'Content-Type': 'application/json'
    // };

    res.status(200).json({data:database })
    // try {
    //     const response = await axios.get(`${NOTION_API_URL}/v3/databases/${databaseId}`, { headers });
    //     console.log('response',response.data);
    //     res.status(200).json({response:response.data })
    //   } catch (error) {
    //     console.error(error);
    //   }

      
}