import { join } from 'path';
import { src, dest, watch, series } from 'gulp';
import { GFile, Core, Task, TSC, write, createProject } from 'gyi';
import less from 'gulp-less';
// const LessChanged = require('gulp-less-changed');

@GFile
export class GulpFile extends Core {

    @Task({ description: 'Less 编译任务 .' })
    public async less() {
        console.log('build less ...');
        return await src(join(__dirname, 'packages/**/*.less')).pipe(less()).pipe(dest('dist'));
    }

    @Task({ description: 'Typescript 编译任务 .' })
    public async tsc(tsc: TSC) {
        console.log('build typescript ...');
        return await tsc.src([
            join(__dirname, 'packages/**/*.ts'),
        ]).config({
            sourcemaps: write('./.sourcemaps'),
            typescript: createProject(join(__dirname, 'tsconfig.json')),
            declaration: true,
        }).dest(join(__dirname, 'dist')).run();
    }

    @Task({ series: ['less', 'tsc'], description: '编译任务 .' })
    public async build() {
        console.log('build ...');
    }

    @Task({ description: '编译任务 .' })
    public async components() {
        watch(join(__dirname, 'packages/**/*.less'), series(['less']));
        watch(join(__dirname, 'packages/**/*.ts'), series(['tsc']));
        return true;
    }
}
