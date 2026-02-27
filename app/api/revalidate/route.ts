import { revalidatePath } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret');

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { _type } = body;

    switch (_type) {
      case 'project':
        revalidatePath('/[locale]/projects', 'page');
        revalidatePath('/[locale]/projects/[slug]', 'page');
        break;
      case 'pressRelease':
        revalidatePath('/[locale]/news', 'page');
        revalidatePath('/[locale]/news/[slug]', 'page');
        break;
      case 'teamMember':
        revalidatePath('/[locale]/about', 'page');
        break;
      case 'esgInitiative':
        revalidatePath('/[locale]/sustainability', 'page');
        break;
      case 'irDocument':
        revalidatePath('/[locale]/investor-relations', 'page');
        break;
      case 'jobListing':
        revalidatePath('/[locale]/careers', 'page');
        break;
      case 'siteSettings':
        revalidatePath('/', 'layout');
        break;
      default:
        revalidatePath('/', 'layout');
    }

    return NextResponse.json({ revalidated: true, _type });
  } catch {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}
