/** @format */

export const ThanksQuery = `query MyQuery {
  obrigados {
    headline
    subheadline
    lottie
  }
}`;

export const HomeQuery = `query MyQuery {
  homepages {
    headline
    headlinespan
    subheadline
    ctahero
    videohero {
      url
    }
    vantagenstitle
    vantagensdescription
    vantagem {
      ... on Vantagem {
        id
        description
        title
        image {
          url
        }
      }
    }
    ctavantagem
    titlesolucoes
    desciptionsolucoes
    solucao {
      ... on Solucao {
        id
        description
        title
        indexColumn
        image {
          url
        }
      }
    }
    ctasectiontitle
    ctasectiondescription
    ctasectionimage {
      url
    }
    ctasectionbtn
    contactsectiontitle
    contactsectiondescription
    argumento {
      ... on Argumento {
        id
        description
        title
      }
    }
  }
}`;

export const NotFoundQuery = `query MyQuery {
  erros {
    erroTitle
    erroLottie
  }
}`;

export const PoliticsQuery = `query MyQuery {
  politicas {
    politicaTilte
    politicaDescription
    termosTitle
    termosDescription
  }
}`;
