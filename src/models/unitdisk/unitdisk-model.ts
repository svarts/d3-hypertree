import { ILayer }                  from '../../components/layerstack/layer'
import { IUnitDisk }               from '../../components/unitdisk/unitdisk'
import { Hypertree }               from '../../components/hypertree/hypertree'

import { N }                       from '../n/n'
import { C, Ck, Cp }               from '../transformation/hyperbolic-math'
import { Transformation }          from '../transformation/hyperbolic-transformation'
import { TransformationCache }     from '../transformation/hyperbolic-transformation'
import { ArcCurvature }            from '../../components/layers/link-layer';

export interface UnitDiskView
{
    parent:            any,
    position:          string,
    className:         string,
    hypertree:         Hypertree,
}

export interface UnitDiskArgs
{
    data?:             N
    transform?:        (n:N)=> C

    decorator:         { new(view:UnitDiskView, args:UnitDiskArgs) : IUnitDisk }
    transformation:    Transformation<N>,    
    cacheUpdate:       (ud:IUnitDisk, cache:TransformationCache)=> void
    
    layers:            ((v, ls:IUnitDisk)=> ILayer)[]
    layerOptions:      {}

    clipRadius:        number

    nodeRadius:        (ud:IUnitDisk, n:N)=> number
    nodeScale:         (n:N)=> number
    nodeFilter:        (n:N)=> boolean
    offsetEmoji:       (d, i, v)=> C
    offsetLabels:      (d, i, v)=> C

    captionBackground: 'all' | 'center' | 'none'        // x 
    captionFont:       string

    linkWidth:         (n:N)=> number
    linkCurvature:     ArcCurvature
}
