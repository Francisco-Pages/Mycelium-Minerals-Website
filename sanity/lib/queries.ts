import { groq } from 'next-sanity';

// ── Projects ──────────────────────────────────────────────────────────────────

export const projectsQuery = groq`
  *[_type == "project"] | order(orderRank asc) {
    _id,
    slug,
    name,
    stage,
    commodities,
    location,
    summary,
    thumbnail
  }
`;

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    slug,
    name,
    stage,
    commodities,
    location,
    summary,
    description,
    highlights,
    mapCoordinates,
    documents,
    thumbnail,
    gallery
  }
`;

// ── Press Releases ────────────────────────────────────────────────────────────

export const pressReleasesQuery = groq`
  *[_type == "pressRelease"] | order(publishedAt desc) {
    _id,
    slug,
    title,
    publishedAt,
    excerpt
  }
`;

export const pressReleaseBySlugQuery = groq`
  *[_type == "pressRelease" && slug.current == $slug][0] {
    _id,
    slug,
    title,
    publishedAt,
    body,
    pdfFile
  }
`;

// ── Team Members ──────────────────────────────────────────────────────────────

export const teamMembersQuery = groq`
  *[_type == "teamMember"] | order(orderRank asc) {
    _id,
    name,
    title,
    role,
    bio,
    headshot
  }
`;

// ── IR Documents ──────────────────────────────────────────────────────────────

export const irDocumentsQuery = groq`
  *[_type == "irDocument"] | order(publishedAt desc) {
    _id,
    title,
    category,
    publishedAt,
    file
  }
`;

// ── Job Listings ──────────────────────────────────────────────────────────────

export const jobListingsQuery = groq`
  *[_type == "jobListing" && isActive == true] | order(publishedAt desc) {
    _id,
    title,
    location,
    department,
    type,
    description,
    publishedAt
  }
`;

// ── ESG Initiatives ───────────────────────────────────────────────────────────

export const esgInitiativesQuery = groq`
  *[_type == "esgInitiative"] | order(orderRank asc) {
    _id,
    title,
    category,
    summary,
    icon
  }
`;

// ── Site Settings ─────────────────────────────────────────────────────────────

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    stockTicker,
    exchange,
    irEmail,
    irPhone,
    headquartersAddress,
    socialLinks
  }
`;
