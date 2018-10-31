import { PipeTransform, Injectable } from '@angular/core';
import { ServerConfig } from '../../config/server-config/server-config';
import { ConfigurableRoutesService } from '../configurable-routes.service';

type Segment = string;
type Path = string;
type Parameter = string;

@Injectable()
export class PathService implements PipeTransform {
  constructor(
    private configurableRoutesService: ConfigurableRoutesService,
    private config: ServerConfig
  ) {}

  // always returns an absolute path (with leading /)
  transform(pageName: string, parametersObject: object): Segment[] {
    const paths = this.configurableRoutesService.getPathsForPage(pageName);

    if (paths === undefined) {
      return ['/']; // main route
    }

    const path = this.getFirstPathMatchingAllParameters(
      paths,
      parametersObject
    );

    if (path === undefined) {
      if (!this.config.production) {
        // TODO check if it does print nicely
        console.warn(
          `No configured path matches all its parameters to given parameters object. Configured paths: `,
          path,
          `. Parameters object: `,
          parametersObject
        );
      }
      return ['/']; // main route
    }

    const absolutePath = this.ensureLeadingSlash(path); // TODO: rethink if always return absulte path - for configurable child routes
    const parameterNamesMapping = this.configurableRoutesService.getParameterNamesMapping(
      pageName
    );

    return this.replaceParameters(
      absolutePath,
      parametersObject,
      parameterNamesMapping
    );
  }

  private replaceParameters(
    path: Path,
    parametersObject: object,
    parameterNamesMapping: object
  ) {
    return this.getSegments(path).map(segment => {
      if (this.isParameter(segment)) {
        const parameterName = this.getParameterName(segment);
        const mappedParameterName =
          parameterNamesMapping[parameterName] || parameterName; // if parameter isn't in the mapping object, use original parameter name

        return parametersObject[mappedParameterName];
      }
      return segment;
    });
  }

  private getFirstPathMatchingAllParameters(
    paths: Path[],
    parametersObject: object
  ): Path {
    return paths.find(path =>
      this.getParameters(path).every(
        parameterName => parametersObject[parameterName] !== undefined
      )
    );
  }

  private getParameters(path: Path) {
    return this.getSegments(path)
      .filter(this.isParameter)
      .map(this.getParameterName);
  }

  private getSegments(path: Path): Segment[] {
    return path.split('/');
  }

  private isParameter(segment: Segment): boolean {
    return segment.startsWith(':');
  }

  private getParameterName(segment: Segment): Parameter {
    return segment.slice(1); // it just removes leading ':'
  }

  private ensureLeadingSlash(path: Path): Path {
    return (path = path.startsWith('/') ? path : '/' + path);
  }
}
