const query=`
{
    productCollection{
      items{
        productName
        category
        productImage{
          url
        }
      }
    },
    serviceCollection{
      items{
        serviceName
        category
        serviceImage{
          url
        }
      }
    }
  }
  `

export async function fetchContentfulQuery(){
    const response=await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/`, {
        method: 'POST',
        headers: {
            "Content-Type":"application/json",
            Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
        },
        body: JSON.stringify({query})
    });

    const queryres=await response.json()

    return queryres;
}