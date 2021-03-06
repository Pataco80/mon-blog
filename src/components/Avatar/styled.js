import styled from "styled-components"
import { setPxToRem } from "../../styles/helpers"
import media from "styled-media-query"

// Import Components for App

// Styles exports
export const AvatarWrapper = styled.div`
  .gatsby-image-wrapper {
    border-radius: 50%;
    width: ${setPxToRem(40)};
    height: auto;
    margin-right: ${setPxToRem(16)};

    ${media.greaterThan("medium")`
      width:${setPxToRem(60)};
      margin:auto;
    `}
  }
`
