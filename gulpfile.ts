import { join } from 'path';
import { src, dest } from 'gulp';
import { GFile, Core, Task, TSC, write, createProject } from 'gyi';
import less from 'gulp-less';
// const LessChanged = require('gulp-less-changed');

@GFile
export class GulpFile extends Core {

    @Task({ description: 'Less 编译任务 .' })
    public async less() {
        console.log('build ...');
        return await src(join(__dirname, 'src/**/*.less')).pipe(less()).pipe(dest('dist'));
    }

    @Task({ series: ['less'], description: '编译任务 .' })
    public async build(tsc: TSC) {
        console.log('build ...');
        return await tsc.src([
            join(__dirname, 'src/**/*.ts'),
        ]).config({
            sourcemaps: write('./.sourcemaps'),
            typescript: createProject(join(__dirname, 'tsconfig.json')),
            declaration: true,
        }).dest(join(__dirname, 'dist')).run();
    }
}
