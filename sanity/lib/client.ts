import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
  // For draft previews, pass a token:
  // token: process.env.SANITY_API_READ_TOKEN,
});

/**
 * Typed fetch helper for Sanity queries.
 * Usage: await sanityFetch<Project[]>({ query: projectsQuery })
 */
export async function sanityFetch<T>({
  query,
  params = {},
  tags,
}: {
  query: string;
  params?: Record<string, unknown>;
  tags?: string[];
}): Promise<T> {
  return client.fetch<T>(query, params, {
    next: {
      revalidate: 3600,
      ...(tags ? { tags } : {}),
    },
  });
}
