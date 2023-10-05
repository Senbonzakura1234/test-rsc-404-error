'use client';

import usePageSegment from '@root/hooks/usePageSegment';
import { Fragment } from 'react';
import LinkItem from './LinkItem';

const improvedInclude = <TSearch extends Readonly<string | number>>(
	arr: Readonly<Array<TSearch>>,
	search: unknown,
): search is TSearch => arr.includes(search as TSearch);

const moduleIdList = ['effect', 'item', 'trait', 'rumor'] as const;
const listAboutPaths = ['about', 'profile', 'license'] as const;

export default function Breadcrumb() {
	const { segment } = usePageSegment();

	return (
		<>
			<li>
				<LinkItem
					aria-label='Go to homepage'
					href='/'
					isActive={!segment}
				>
					<span className='hidden sm:inline'>home</span>
				</LinkItem>
			</li>

			<li className='gap-2 before:!m-0 2xl:gap-3'>
				{moduleIdList.map((m, i) => (
					<Fragment key={m}>
						<LinkItem
							aria-label={`Go to ${i} Search`}
							href={`/${m}`}
							isActive={m === segment}
						>
							{m}
						</LinkItem>

						{i < moduleIdList.length - 1 ? (
							<div className='aspect-square h-2/3 rounded-full bg-base-content/40 sm:h-1.5' />
						) : null}
					</Fragment>
				))}
			</li>

			<li className='gap-2 before:!m-0 2xl:gap-3'>
				<LinkItem
					aria-label={`Go to about page`}
					href='/about'
					isActive={improvedInclude(listAboutPaths, segment)}
				>
					<span className='hidden sm:inline'>about</span>
				</LinkItem>
			</li>
		</>
	);
}
