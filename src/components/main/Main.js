import React from 'react';
import Header from '../common/Header';
import Visual from './Visual';
import News from './News';
import Pics from './Pics';
import Vids from './Vids';
import Banner from './Banner';
import Btns from './Btns';
import { useState } from 'react';

function Main() {
	const [Scrolled, setScrolled] = useState(0);
	const [Pos, setPos] = useState([]);
	{
		/* 미션 답안 : 부모요소에 State와 State변경함수를 만들고, 값을 전달해야 되는 자식 컴포넌트에는 State변경함수를, 값을 받아야 되는 자식 컴포넌트에는 State값을 prop으로 전달. */
	}
	return (
		<main>
			<Header type={'main'} />
			<Visual />
			<News />
			<Pics Scrolled={Scrolled} Pos={Pos[2]} />
			<Vids />
			<Banner />
			<Btns setScrolled={setScrolled} setPos={setPos} />
		</main>
	);
}

export default Main;