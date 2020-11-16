import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card, TitleWrap } from 'components/common';
import Star from 'components/common/Icons/Star';
import Fork from 'components/common/Icons/Fork';
import { Wrapper, Grid, Item, Content, Stats, Languages } from './styles';
import Img from 'gatsby-image'

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const data = useStaticQuery(graphql`
  {
      allMdx {
        edges {
            node {
            frontmatter {
              title
              url
              stack
              image {
                childImageSharp {
                    fluid (maxWidth:400){
                    ...GatsbyImageSharpFluid
                }
                }
            }
            }
        }
        }
    }
}
  `)
  let projects=data.allMdx.edges
//   console.log(projects)
  return (
      <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        {projects.map(({ node },i) => (
            <Item key={i} as="a" href={node.frontmatter.url} target="_blank" rel="noopener noreferrer" theme={theme}>
            <Card theme={theme}>
              <Content theme={theme}>
                {/* <h4>{node.name}</h4>
                <p>{node.description}</p> */}

                <Img fluid={node.frontmatter.image.childImageSharp.fluid}/>
                <h4>

                    {node.frontmatter.title}
                </h4>
                <div className="stack">
                    {
                        node.frontmatter.stack.map((item,i)=>{
                            return(
                                <span key={i}>
                                    {item}
                                </span>
                            )
                        })
                    }
                </div>
              </Content>
              <TitleWrap>
                {/* <Stats theme={theme}>
                  <div>
                    <Star color={theme === "light" ? "#000" : "#fff"} />
                    <span>{node.stargazers.totalCount}</span>
                  </div>
                  <div>
                    <Fork color={theme === "light" ? "#000" : "#fff"} />
                    <span>{node.forkCount}</span>
                  </div>
                </Stats> */}
                {/* <Stats theme={theme}>
                  <Languages>
                    {
                        node.languages.nodes.map(({ id, name }) => (
                        <span key={id}>
                          {name}
                        </span>
                      ))
                    }
                  </Languages>
                </Stats> */}
              </TitleWrap>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};

//   const {
//     github: {
//       viewer: {
//         repositories: { edges },
//       },
//     },
//   } = useStaticQuery(
//     graphql`
//       {
//         github {
//           viewer {
//             repositories(first: 8, orderBy: { field: STARGAZERS, direction: DESC }) {
//               edges {
//                 node {
//                   id
//                   name
//                   url
//                   description
//                   stargazers {
//                     totalCount
//                   }
//                   forkCount
//                   languages(first: 3) {
//                     nodes {
//                       id,
//                       name
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     `
//   );